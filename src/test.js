// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('qxspBLg0WVTH8IfOp6UU').collection('cartItems').doc('0qRyviNTiBePfrTVHpPh')
// viet ngan lai
firestore.doc('/users/qxspBLg0WVTH8IfOp6UU/cartItems/0qRyviNTiBePfrTVHpPh')
firestore.collection('/users/qxspBLg0WVTH8IfOp6UU/cartItems')

