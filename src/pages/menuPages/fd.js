import React,{useState} from "react";
import FD from "../../assets/img/FD.jpg";
import FD2 from  "../../assets/img/FD2.jpg";
import rate from "../../assets/img/rate.jpg" 
import "../../assets/css/Fixeddeposit.css";
function Fixeddeposit(){
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };
    return(
    <div>
        <head className="head">Fixed Deposit</head>
        <div className="main">
        <div className="content">
        <div>
        <span className="question"><h2>What is Fixed Deposit?</h2></span>
        <div className="underline"></div>
        </div>
        <p className="para">A Fixed Deposit is when you deposit a sum of money into your bank account for a set length of time at a fixed rate of interest. You receive the amount you initially invested plus compound interest at the end of the fixed deposit's term. </p>
        <div className="img">
        <img src={FD} alt="imagefd" />
        </div>
        <div>
        <div>
        <span className="question"><h2>Types Of Fixed Deposits </h2></span>
        <div className="underline"></div>
        </div>
        <div className="Types">
            <p>Before starting the investment one should have the basic idea of different types of Fixed Deposits:</p>
        </div>
        <div className="1">
            <h3>
            <span>1. Standard fixed deposit</span>
            </h3>
            <span>A standard fixed deposit implies an investment of funds for a certain amount of time at a fixed interest rate. A standard fixed deposit can be made for a duration of 7 days to 10 years. The majority of stakeholders have chosen this FD option.</span>
        </div>
        <div className="2">
            <h3>
            <span>2. Special Fixed Deposit</span>
            </h3>
            <span>Special Fixed Deposits are considered special since they are usually offered for a special time period. A particular time frame can last anywhere from 290 to 390 days. Special FDs are a preferred option for many stakeholders since they provide a higher interest rate.</span>
        </div>
        <div className="3">
            <h3>
            <span>3. Tax saving Fixed Deposit</span>
            </h3>
            <span>Tax saving fixed deposits, unlike standard fixed deposits, cannot be reserved for terms shorter than five years. Section 80C of the Income Tax Act of 1961 exempts the amount invested from taxation, but the interest earned on the FD is subject to taxation.</span>
        </div>
        <div className="4">
            <h3>
            <span>4. Floating Fixed Deposit</span>
            </h3>
            <span>In a floating fixed deposit, the rate fluctuates every three months or once a year, and customers can benefit from shifting interest rates.</span>
        </div>
        <div className="img">
            <img className="img2" src={FD2} alt="imagefd2"/>
        </div>
        </div>
        <div class="Highlights">
            <div>=
            <span className="question"><h2>Highlights of Fixed Deposit</h2></span>
            <div className="underline"></div>
            </div>
            <ul>
                <li>
                    The sum can only be deposited once. You should start a new Fixed deposit if you want to make more deposits.
                </li>
                <li>The interest rate is greater than a savings account's rate.</li>
                <li>The time frame varies from seven days to ten years.</li>
                <li>Fixed deposits can be easily renewed.</li>
                <li>Before the maturity period, withdrawals are not permitted. The account holder is responsible for any penalties associated with an emergency withdrawal.</li>
            </ul>
        </div>
        <div className="Eligiblity">
            <div>
            <span className="question"><h2>Eligiblity</h2></span>
            <div className="underline"></div>
            </div>
            <div>
                <p>The following are eligible for opening a Fixed Deposit Account in India:</p>
            </div>
            <ul>
                <li>Indian Citizens</li>
                <li>Senior Citizens</li>
                <li>Minors</li>
                <li>Companies</li>
                <li>NRIs</li>
                <li>Partnership Firms</li>
                <li>Societies and Clubs</li>
                <li>Individuals or Joint investors</li>
                <li>Sole proprietorship</li>
            </ul>
        </div>
        <div>
            <div><span className="question">
                <h2>How is Fixed Deposit Calcualted?</h2>
            </span>
            <div className="underline"></div>
            </div>
            <div>
                <p>FD can be calculated using the following formula:</p>
                <span className="formula">A = P(1 + r/n)^n*t</span>
                <p>Where,</p>
                <p>A: Maturity amount</p>
                <p>P: Principal amount</p>
                <p>r: rate of interest</p>
                <p>n: compound interest frequency</p>
                <p>t: Number of years</p>
            </div>
            <div>
                <img className="rateimg" src={rate} alt="imagerate"/>
            </div>
        </div>
        <div className="Benefits">
            <div >
                <span className="question"><h2>Benefits of Fixed Deposit</h2></span>
                <div className="underline"></div>
            </div>
            <div>
                <h3>
                    <span>1.Assured Returns</span>
                </h3>
                <p>One of the main advantages of investing in a fixed deposit account is that it assures returns. In comparison to other investment options like mutual funds, there are no risks at all. On maturity of the FD, you will receive a fixed interest rate on the money you invested.</p>
            </div>
            <div>
                <h3>
                    <span>2.Higher Rate of Interest</span>
                </h3>
                <p>Fixed deposits enable people to earn a higher rate of interest in comparison to their savings account or any other form ofterm deposit.</p>
            </div>
            <div>
                <h3>
                    <span>3.Flexible Tenures</span>
                </h3>
                <p>You can choose to open a fixed deposit account for a period of 7 days to 10 years.</p>
            </div>
            <div>
                <h3>
                    <span>
                        4.Multiple Fixed Deposit Account
                    </span>
                </h3>
                <p>You can hold more than one FD account at a given point in time. Whenever you wish to make an additional investment, you can always open a new FD account</p>
            </div>
            <div>
                <h3>
                    <span>5.Easy to Open</span>
                </h3>
                <p>You can open a Fixed Deposit account in a matter of a few minutes. You can either apply for it online or walk into your nearest bank branch and ask an executive to open it.</p>
            </div>
        </div>
            </div>
            {/* <div className="calculator">
                <span className="click">To Calculate, Click here!</span>
                <button className="open" onClick={toggleModal}>Open Calculator</button>
                {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <Calculator />
                        <button className="close" onClick={toggleModal}>X</button>
                    </div>
                </div>
                )}
            </div> */}
            <div className="ratelist">
            <div className="bankrates">Checkout rates of differrent banks:</div>
                <table className="table">
                    <tr>
                    <th>Bank's Name</th>
                    <th>Link</th>
                    </tr>
                    <tr>
                        <td>SBI</td>
                        <td>
                            <a href="https://sbi.co.in/web/interest-rates/interest-rates/deposit-rates">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Bank of Baroda</td>
                        <td>
                            <a href="https://www.bankofbaroda.in/interest-rate-and-service-charges/deposits-interest-rates">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Central Bank of India</td>
                        <td>
                            <a href="https://www.centralbankofindia.co.in/en/interest-rates-on-deposit">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Indian Bank</td>
                        <td>
                            <a href="https://www.indianbank.in/departments/deposit-rates/#!">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Punjab National Bank</td>
                        <td>
                            <a href="https://www.pnbindia.in/Interest-Rates-Deposit.html">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>UCO Bank</td>
                        <td>
                            <a href="https://www.ucobank.com/english/interest-rate-deposit-account.aspx">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Union Bank of India</td>
                        <td>
                            <a href="https://www.unionbankofindia.co.in/english/interest-rate.aspx">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Canara Bank</td>
                        <td>
                            <a href="https://canarabank.com/User_page.aspx?othlink=9">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Indian Overseas Bank</td>
                        <td>
                            <a href="https://www.iob.in/Domestic_Rates">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Bank of Maharashtra</td>
                        <td>
                            <a href="https://bankofmaharashtra.in/domestic-term-deposits">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Punjab and Sind Bank</td>
                        <td>
                            <a href="https://punjabandsindbank.co.in/content/interestdom">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Axis Bank</td>
                        <td>
                            <a href="https://www.axisbank.com/interest-rate-on-deposits">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>HDFC Bank</td>
                        <td>
                            <a href="https://www.hdfcbank.com/personal/resources/rates">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>ICICI Bank</td>
                        <td>
                            <a href="https://www.icicibank.com/personal-banking/deposits/fixed-deposit/fd-interest-rates">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Bandhan Bank</td>
                        <td>
                            <a href="https://bandhanbank.com/rates-charges">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>IndusInd Bank</td>
                        <td>
                            <a href="https://www.indusind.com/in/en/personal/rates.html">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>IDFC Bank</td>
                        <td>
                            <a href="https://www.idfcfirstbank.com/personal-banking/deposits/fixed-deposit/fd-interest-rates">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Yes Bank</td>
                        <td>
                            <a href="https://www.yesbank.in/personal-banking/yes-individual/deposits/fixed-deposit">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>RBL Bank</td>
                        <td>
                            <a href="https://www.rblbank.com/interest-rates">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Federal Bank</td>
                        <td>
                            <a href="https://www.federalbank.co.in/deposit-rate">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>IDBI Bank</td>
                        <td>
                            <a href="https://www.idbibank.in/interest-rates.aspx">Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Kotak Mahindra Bank</td>
                        <td>
                            <a href="https://www.kotak.com/en/personal-banking/deposits/fixed-deposit/fixed-deposit-interest-rate.html">Click here</a>
                        </td>
                    </tr>

                </table>
            </div>
        </div>
    </div>
    );
}
export default Fixeddeposit;