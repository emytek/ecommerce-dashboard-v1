import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './FeaturedInfo.css'

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem item1">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,145</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compare to last Month</span>
        </div>

        <div className="featuredItem item2">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,145</span>
                <span className="featuredMoneyRate">-1.4 <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compare to last Month</span>
        </div>

        <div className="featuredItem item3">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">+2.4 <ArrowUpward className='featuredIcon'/></span>
            </div>
            <span className="featuredSub">Compare to last Month</span>
        </div>
    </div>
  )
}
