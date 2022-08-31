import React from 'react'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import { Link } from 'react-router-dom'
import './Product.css'
import { Publish } from '@material-ui/icons'

export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance" />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="/images/img1.jpg" alt="" className='productInfoImg'/>
                    <span className="productName">Apple airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form action="" className="productForm">
                <div className="productFormLeft">
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder="Apple airpods" />
                    <label>In Stock</label>
                    <select name="In Stock" id="IdStock">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="activeId">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="/images/img2.jpg" alt="" className='productUploadImg'/>
                        <label for="file">
                            <Publish />
                        </label>
                        <input type="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
