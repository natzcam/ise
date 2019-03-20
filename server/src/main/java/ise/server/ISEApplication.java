package ise.server;

import org.hl7.fhir.instance.model.Subscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import ca.uhn.fhir.jpa.config.WebsocketDispatcherConfig;
import ca.uhn.fhir.jpa.dao.DaoConfig;
import ca.uhn.fhir.jpa.search.DatabaseBackedPagingProvider;
import ca.uhn.fhir.jpa.subscription.SubscriptionInterceptorLoader;
import ca.uhn.fhir.jpa.subscription.module.cache.SubscriptionLoader;
import ca.uhn.fhir.rest.server.HardcodedServerAddressStrategy;
import ca.uhn.fhir.rest.server.RestfulServer;
import ca.uhn.fhir.rest.server.interceptor.LoggingInterceptor;
import ca.uhn.fhir.rest.server.interceptor.ResponseHighlighterInterceptor;
import ca.uhn.fhir.spring.boot.autoconfigure.FhirProperties;
import ca.uhn.fhir.spring.boot.autoconfigure.FhirRestfulServerCustomizer;

@SpringBootApplication
@Import(WebsocketDispatcherConfig.class)
@EnableScheduling
@EnableConfigurationProperties(FhirProperties.class)
public class ISEApplication {

	@Value("${hapi.fhir.server.address}")
	String serverAddress;

	@Autowired
	DaoConfig daoConfig;

	@Autowired
	SubscriptionLoader loader;

	@Autowired
	SubscriptionInterceptorLoader subscriptionInterceptorLoader;

	@Bean
	@ConfigurationProperties("hapi.fhir.logging")
	public LoggingInterceptor loggingInterceptor() {
		return new LoggingInterceptor();
	}

	@Bean
	FhirRestfulServerCustomizer customer() {
		return (RestfulServer server) -> {
			daoConfig.addSupportedSubscriptionType(Subscription.SubscriptionChannelType.WEBSOCKET);
			daoConfig.setFetchSizeDefaultMaximum(20);
			DatabaseBackedPagingProvider paging = (DatabaseBackedPagingProvider) server.getPagingProvider();
			paging.setDefaultPageSize(20);
			server.registerInterceptor(new ResponseHighlighterInterceptor());
			server.registerInterceptor(new SubscriptionInterceptor(loader));
			server.registerInterceptor(loggingInterceptor());

			server.setServerAddressStrategy(new HardcodedServerAddressStrategy(serverAddress));

			subscriptionInterceptorLoader.registerInterceptors();
		};
	}

	@Bean
	public FilterRegistrationBean<CorsFilter> corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.addAllowedOrigin("*");
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		source.registerCorsConfiguration("/**", config);
		FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<CorsFilter>(new CorsFilter(source));
		bean.setOrder(0);
		return bean;
	}

	public static void main(String[] args) {
		SpringApplication.run(ISEApplication.class, args);
	}

}
