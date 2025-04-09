import './Products.css'
import Card from './card';
import ProductItem from './productitem';

const Product = (props) => {

    return (
        <Card className = 'product'>
            <ProductItem day = {props.item[0].day} month = {props.item[0].month} year = {props.item[0].year} date ={props.item[0].date} name = {props.item[0].name}></ProductItem>
            <ProductItem day = {props.item[1].day} month = {props.item[1].month} year = {props.item[1].year} date ={props.item[1].date} name = {props.item[1].name}></ProductItem>
            <ProductItem day = {props.item[2].day} month = {props.item[2].month} year = {props.item[2].year} date ={props.item[2].date} name = {props.item[2].name}></ProductItem>
            <ProductItem day = {props.item[3].day} month = {props.item[3].month} year = {props.item[3].year} date ={props.item[3].date} name = {props.item[3].name}></ProductItem>
            

        </Card>
    );
}

export default Product;