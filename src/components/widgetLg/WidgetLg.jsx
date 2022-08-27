import React from 'react';
import './WidgetLg.css'

export default function WidgetLg() {
    // styled component    ...the button type will be rendered dynamically
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                {/* table heading and table data*/}
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>

            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="/images/img2.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Sam Allen</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                    <Button type="Approved"/>
                </td>
            </tr>

            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="/images/img2.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Sam Allen</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                    <Button type="Declined"/>
                </td>
            </tr>

            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="/images/img2.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Sam Allen</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                    <Button type="Approved"/>
                </td>
            </tr>

            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="/images/img2.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Sam Allen</span>
                </td>
                <td className="widgetLgDate">2 Jun 2022</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus">
                    <Button type="Pending"/>
                </td>
            </tr>
        </table>
    </div>
  )
}
