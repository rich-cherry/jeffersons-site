import React from 'react'
import { FooterWrapper } from './styles';

export function Footer() {
    return (
        <FooterWrapper>
            <div className="footerText">
                <h1>For all the celebrations of lie.</h1>
                <p>310 West 9th Street</p>
                <p>Greenville, NC 27834</p>
                <p>252-355-5600</p>
            </div>
            <div className="footer">
                <h3>Join our mailing list.</h3>
                <input type="text" placeholder="Email" />
                <button type="submit">Submit</button>
            </div>
        </FooterWrapper>
    )
}