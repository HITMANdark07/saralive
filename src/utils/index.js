import { cashfreeAppId, cashfree_prod, cashfreeSecretKey, API} from '../../api.config';
import axios from 'axios';
import RNPgReactNativeSdk from 'react-native-pg-react-native-sdk';
import { ToastAndroid } from 'react-native';


export const generateTokenAndPay = (amount, orderId, currentUser) => {
    axios({
        method:'POST',
        url:cashfree_prod,
        headers:{
            'Content-Type':'application/json',
            'x-client-id':cashfreeAppId,
            'x-client-secret':cashfreeSecretKey
        },
        data:{
            orderId: orderId,
            orderAmount:String(((amount*100)/70)?.toFixed(2)),
            orderCurrency: "INR"
        }
    }).then(({data}) => {
        if(data.status==="OK"){
            const checkout = new Map();
            checkout.set("orderId", orderId); // orderId here
            checkout.set("orderAmount", String(((amount*100)/70).toFixed(2))); // orderAmount here
            checkout.set("appId", cashfreeAppId); // apiKey here
            checkout.set("tokenData", data?.cftoken); // cfToken here

            checkout.set("orderCurrency", "INR");
            checkout.set("orderNote", "Test Note");
            checkout.set("customerName", currentUser.name);
            checkout.set("customerPhone", "9999999999");
            checkout.set("customerEmail", currentUser.email);
            checkout.set("hideOrderId", "true");
            checkout.set("color1", "#6002EE");
            checkout.set("color2", "#ffff1f");
            checkout.set("appName",null);
            RNPgReactNativeSdk.startPaymentWEB(checkout,'PROD',(response) => {
              const resp = JSON.parse(response);
              if(resp.txStatus=="SUCCESS"){
                axios({
                    method:'POST',
                    url:`${API}/customer_wallet_recharge`,
                    data:{
                        customer_id:currentUser.user_id,
                        paymode:1,
                        transaction_details:resp.orderId,
                        amount:amount
                    }
                }).then((res) => {
                    ToastAndroid.showWithGravity(res.data.responseText,ToastAndroid.CENTER,ToastAndroid.LONG);
                }).catch((err) => {
                    console.log(err);
                })
              }
            })
        }else{
            ToastAndroid.showWithGravity("Payment Failed",ToastAndroid.CENTER,ToastAndroid.LONG);
        }
    }).catch((err) => {
        console.log(err);

    })
}