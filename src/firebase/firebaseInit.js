import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA74u7pe-5Nm6Q_cFwIWXFnmQrOJt_wsTc",
	authDomain: "vue-blog-3b6b3.firebaseapp.com",
	projectId: "vue-blog-3b6b3",
	storageBucket: "vue-blog-3b6b3.appspot.com",
	messagingSenderId: "647224123063",
	appId: "1:647224123063:web:9f7fedba54652ce4eab732",
	measurementId: "G-ZXMMRLMZ38"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestmap = firebase.firestore.FieldValue.serverTimestamp;

export { timestmap };
export default firebaseApp.firestore;
