import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../auth/firebase";

const productCollectionRef = collection( db,"products")

class ProductCrud {
     addProduct = (newproduct)=>{
        return addDoc(productCollectionRef,newproduct);
    }
     deleteProduct= (id)=>{
        const productDoc = doc(db,"products",id)
        return deleteDoc(productDoc);
    }
     getAllProducts = ()=>{
        return getDocs(productCollectionRef);
    }
    getproduct = (id) =>{
        const  productDoc =doc(db,"products",id);
        return getDocs(productDoc);
    }
}
export default new ProductCrud();