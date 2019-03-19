package ise.server;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hl7.fhir.instance.model.api.IBaseResource;
import org.hl7.fhir.r4.model.Subscription;

import ca.uhn.fhir.jpa.subscription.module.cache.SubscriptionLoader;
import ca.uhn.fhir.rest.api.RequestTypeEnum;
import ca.uhn.fhir.rest.api.server.RequestDetails;
import ca.uhn.fhir.rest.server.exceptions.AuthenticationException;
import ca.uhn.fhir.rest.server.interceptor.InterceptorAdapter;

public class SubscriptionInterceptor extends InterceptorAdapter {

    private SubscriptionLoader loader;

    public SubscriptionInterceptor(SubscriptionLoader loader) {
        this.loader = loader;
    }

    @Override
    public boolean outgoingResponse(RequestDetails theRequestDetails, IBaseResource theResponseObject,
            HttpServletRequest theServletRequest, HttpServletResponse theServletResponse)
            throws AuthenticationException {
        if (theRequestDetails.getRequestType() == RequestTypeEnum.POST
                && theResponseObject.getClass() == Subscription.class) {
            loader.syncSubscriptions();
        }

        return true;
    }
}