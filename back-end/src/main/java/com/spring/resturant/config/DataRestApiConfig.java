package com.spring.resturant.config;

import com.spring.resturant.model.Category;
import com.spring.resturant.model.Order;
import com.spring.resturant.model.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

@Configuration
public class DataRestApiConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] preventMethod = {HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE};
        // Disable Http Methods For Category, Order : POST, PUT, DELETE
        disableHttpMethods(Category.class, config, preventMethod);
        disableHttpMethods(Order.class, config, preventMethod);
        disableHttpMethods(User.class, config, preventMethod);

//        config.getExposureConfiguration()
//                .forDomainType(Category.class)
//                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(preventMethod)))
//                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(preventMethod)));
//        config.getExposureConfiguration()
//                .forDomainType(Order.class)
//                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(preventMethod)))
//                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(preventMethod)));

    }
    public void disableHttpMethods(Class theClass, RepositoryRestConfiguration config, HttpMethod[] preventMethod) {
        config.getExposureConfiguration()
                .forDomainType(theClass)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(preventMethod)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(preventMethod)));
    }
    }
