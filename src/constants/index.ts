/**
* @file Configuration file for your app's RevenueCat settings.
* @author RevenueCat
*/

import {Platform} from 'react-native';
/*
The API key for your app from the RevenueCat dashboard: https://app.revenuecat.com
*/
export const API_KEY = Platform.select({
    ios: 'test_CCKxlCIdhwfjKlMwoyhagGsYiNi',
    android: 'test_CCKxlCIdhwfjKlMwoyhagGsYiNi',
});

/*
The entitlement ID from the RevenueCat dashboard that is activated upon successful in-app purchase for the duration of the purchase.
*/
export const ENTITLEMENT_ID = 'DishFinder Pro';
