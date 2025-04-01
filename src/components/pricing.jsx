import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {

  return (
    <div class="pricing-container">
        {/* <!-- Crypto Book Plan --> */}
        <div class="pricing-card">
            <div class="pricing-best-value">BEST VALUE</div>
            <h2>CRYPTO BOOK</h2>
            <p class="pricing-price"><span class="pricing-old-price">$99</span> $22</p>
            {/* <button class="pricing-join-btn">Join Now</button> */}
            <Link
                to="/payment"
                state={{ packageDetails: {
                          title: "CRYPTO BOOK",
                          price:"22",
                          highlights: [
                            "General Channel.",
                            "Twitter Tracker.",
                            "Bundle Checker"
                          ],
                          details: {
                            duration: "1 Month (Recurring)",
                            content: [
                              "Coins with potential",
                              "Live Trading Access",
                              "Coverage"
                            ],
                          },
                          requirements: [
                            "",
                            ""
                          ],
                          terms: [
                            "",
                            ""
                          ],
                        },  }}
                className="pricing-join-btn"
              >Join Now</Link>
            <div class="pricing-features">
                <h3>Why Choose Crypto Book?</h3>
                <ul>
                    <li><strong>Comprehensive Crypto Education:</strong> Learn how cryptocurrencies are reshaping global finance.</li>
                    <li><strong>Practical Trading Insights:</strong> Get actionable strategies to navigate the crypto market.</li>
                    <li><strong>Stay Ahead of Trends:</strong> Understand DeFi, CBDCs, and market shifts.</li>
                    <li><strong>Tools for Beginners:</strong> Monitor sentiment with Twitter Tracker.</li>
                    <li><strong>Community Support:</strong> Join our Discord community.</li>
                    <li><strong>Affordable Entry Point:</strong> Start your journey for just $22.</li>
                </ul>
            </div>
        </div>

        {/* <!-- Discord Premium Plan --> */}
        <div class="pricing-card">
            <h2>DISCORD PREMIUM</h2>
            <p class="pricing-price"><span class="pricing-old-price">$119</span> $49 <span class="pricing-monthly">/month</span></p>
            {/* <button class="pricing-join-btn">Join Now</button> */}
            <Link
                to="/payment"
                state={{ packageDetails: {
                          title: "DISCORD PREMIUM",
                          price:"49",
                          highlights: [
                            "General Channel.",
                            "Twitter Tracker.",
                            "Bundle Checker"
                          ],
                          details: {
                            duration: "1 Month (Recurring)",
                            content: [
                              "Coins with potential",
                              "Live Trading Access",
                              "Coverage"
                            ],
                          },
                          requirements: [
                            "",
                            ""
                          ],
                          terms: [
                            "",
                            ""
                          ],
                        }, }}
                className="pricing-join-btn"
              >Join Now</Link>
            <div class="pricing-features">
                <ul>
                    <li>✅ Coins With Potential Bot</li>
                    <li>✅ Twitter Tracker (Premium)</li>
                    <li>✅ Live Trading</li>
                    <li>✅ Coverage</li>
                    <li>✅ Scanning</li>
                    <li>✅ VC Rooms</li>
                    <li>✅ Tools Guide</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Pricing;
