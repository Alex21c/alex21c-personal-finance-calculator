/**
 * This node.js package will help you to compute following personal finance 
 * 1. Emergency Fund Target: Calculates the target amount for an emergency fund based on monthly expenses.
 * 2. Rule of 72: Estimates the number of years it will take for an investment to double based on a fixed annual rate of return.
 * 3. Saving for a Specific Goal: Calculates the amount needed to be saved regularly to achieve a specific financial goal.
 * 4. Debt Payoff Plan: Calculates the time to pay off a debt given regular payments.
 * 5. Return on Investment (ROI): Measures the profitability of an investment relative to its cost.
 * 6. Future Value of a Single Sum (lumpsum): Calculates the future value of a lump sum investment after a certain number of years.
 * 7. Compound Interest with Regular Contributions: Determines the future value of investments with regular contributions.
 * 8. Retirement Savings Target: Determines the target amount to be saved for retirement.
 * 9. Savings Rate: Calculates the percentage of income saved or invested regularly.
 * 10. Asset Allocation Percentage: Helps in determining the proportion of assets to be allocated to different investment types.
 * 
 * Author: Abhishek kumar
 * LinkedIN: https://www.linkedin.com/in/alex21c/
 * Initial Release: May-05-2024
 * License : MIT
 * 
 */

/**
 * 1. Emergency Fund Target:
 *  Emergency Fund Target = Monthly Expenses × Number of Months
 *  - Calculates the target amount for an emergency fund based on monthly expenses.
 * @param {number} monthlyExpenses : monthly expenses
 * @param {number} numberOfMonths : number of months for which to calculate emergency fund
 * @returns {number | undefined} Emergency Fund Target 
 */
export function emergencyFundTarget(monthlyExpenses = null, numberOfMonths =null){
  if(monthlyExpenses ===null || numberOfMonths === null ){
    return undefined;
  }
  return monthlyExpenses * numberOfMonths;
}

/**
 * 2. Rule of 72:
 *  Years to double = 72 / annual return rate
 *  - Estimates the number of years it will take for an investment to double based on a fixed annual rate of return.
 * @param {number} annualReturnRate : annual return rate
 * @returns {number | undefined}  Years to double
 */
export function ruleOf72(annualReturnRate = null){
  if(annualReturnRate === null ){
    return undefined;
  }
  return 72 / annualReturnRate
}

/**
 * 3. Saving for a Specific Goal:
 *  Savings Needed = (Goal Amount - Current Savings) / Number of Months until Goal
 *  - Calculates the amount needed to be saved regularly to achieve a specific financial goal.
 * @param {number} goalAmount : investment goal in rupees for e.g. ₹1 Cr
 * @param {number} currentSavings : for e.g. ₹2 Lakhs
 * @param {number} numberOfMonthsUntilGoal : for e.g. 120 months = 10 years
 * @returns {number | undefined} Savings Needed
 */
export function savingForSpecificGoal(goalAmount = null, currentSavings=null, numberOfMonthsUntilGoal=null){
  if(goalAmount == null, currentSavings==null, numberOfMonthsUntilGoal==null){
    return undefined;
  }
  return Math.round((goalAmount - currentSavings) / numberOfMonthsUntilGoal);
}

/**
 * 4. Debt Payoff Plan:
 *  Months to Pay Off Debt = Total Debt / Monthly Payment
 *  - Calculates the time to pay off a debt given regular payments.
 * @param {number} totalDebt : total debt person is having e.g. ₹10,000/-
 * @param {number} monthlyPayment : monthly EMI payment e.g. ₹1000
 * @returns {number | undefined} Months to Pay Off Debt
 */
export function debtPayOffPlan(totalDebt=null,  monthlyPayment=null){
  if(totalDebt==null,  monthlyPayment==null){
    return undefined;
  }
  return totalDebt / monthlyPayment;
}
/**
 * 5. Return on Investment (ROI):
 *  ROI = (Net Profit / Cost of Investment) * 100%
 *  - Measures the profitability of an investment relative to its cost.
 * @param {number} netProfit : net profit e.g. ₹10,000/-
 * @param {number} costOfInvestment : principal amount invested e.g. ₹1 Lakh
 * @returns {number | undefined} ROI in percent
 */
export function roi(netProfit=null,  costOfInvestment=null){
  if(netProfit==null || costOfInvestment==null){
    return undefined;
  }
  return (netProfit / costOfInvestment) * 100
}

/**
 * 6. Future Value of a Single Sum (lumpsum):
 *  FV = PV * (1 + r/100)^n
 *  Where:
 *  - FV is the future value of the investment
 *  - PV is the present value or initial investment
 *  - r is the annual interest rate 
 *  - n is the number of years
 *  - Calculates the future value of a lump sum investment after a certain number of years.
 * @param {number} presentValue : e.g. ₹2 Lakh
 * @param {number} annualInterestRate : e.g. 10%
 * @param {number} numberOfYears : e.g. 10
 * @returns {number | undefined} future value
 */
export function futureValueOfLumpSum(presentValue=null, annualInterestRate=null, numberOfYears=null){
  if(presentValue==null || annualInterestRate==null || numberOfYears==null){
    return undefined;
  }
  
  return (presentValue * ((1 + (annualInterestRate/100))**numberOfYears)).toFixed(2);
}

/**
 * 7. Compound Interest with Regular Contributions:
 *   FV = P * Math.pow((1 + r), n) + PMT * ((Math.pow((1 + r), n + 1) - 1) / r) * (1 + r);
 *  Where:
 *  - FV is the future value
 *  - P is the principal investment
 *  - r is the interest rate per year
 *  - n is the number of years
 *  - PMT is regular Contribution per month
 *  - Determines the future value of investments with regular contributions.
 * @param {number} principalInvestment : e.g. ₹2 Lakh
 * @param {number} interestRatePerYear : e.g. 10%
 * @param {number} regularContribution : e.g. ₹5000 Montly contribution
 * @param {number} numberOfYears : e.g. 20 years
 * @returns {number | undefined} future value
 */
export function compoundInterestWithRegularContributions(principalInvestment=null, interestRatePerYear=null, regularContribution=null, numberOfYears=null){
  if(principalInvestment == null || interestRatePerYear == null || regularContribution == null || numberOfYears == null){
    return undefined;
  }
  
  interestRatePerYear = interestRatePerYear / 100; // Convert interest rate to decimal
  
  let r = interestRatePerYear;
  let n = numberOfYears;
  let P = principalInvestment;
  let PMT = regularContribution;
  
  // Calculate future value using the formula
  let FV = P * Math.pow((1 + r), n) + PMT * ((Math.pow((1 + r), n + 1) - 1) / r) * (1 + r);
  
  return FV;
}


/**
 * 8. Retirement Savings Target:
 *  Retirement Savings Target = desired Annual Retirement Income / Expected Investment Return Rate
 *  - Determines the target amount to be saved for retirement.
 * @param {number} desiredAnnualRetirementIncome : e.g. ₹24 Lakhs
 * @param {number} expectedInvestmentReturnRate : e.g. 10%
 : e.g. 10%
 * @returns {number | undefined} Retirement Savings Target
 */
export function retirementSavingsTarget(desiredAnnualRetirementIncome =null,  expectedInvestmentReturnRate =null){
  if(desiredAnnualRetirementIncome ==null || expectedInvestmentReturnRate ==null){
    return undefined;
  }
  
  return Math.floor(desiredAnnualRetirementIncome / (expectedInvestmentReturnRate/100));

}


/**
 * 9. Savings Rate:
 *  Savings Rate = (Amount Saved or Invested / Total Income) × 100%
 *  - Calculates the percentage of income saved or invested regularly.
 * @param {number} amountSavedOrInvested : e.g. ₹50,000/-
 * @param {number} totalIncome : e.g. ₹1 Lakh Lakhs/-
 * @returns {number | undefined} Savings Rate in percent
 */
 export function savingsRate(amountSavedOrInvested =null , totalIncome=null){
  if(amountSavedOrInvested ==null || totalIncome==null){
    return undefined;
  }
  
  return (amountSavedOrInvested / totalIncome) * 100;

}

/**
 * 10. Asset Allocation Percentage:
 *  Allocation Percentage = (Value of Asset / Total Portfolio Value) × 100%
 *  - Helps in determining the proportion of assets to be allocated to different investment types.
 * @param {number} valueOfAsset : e.g. ₹50,000/-
 * @param {number} totalPortfolioValue : e.g. ₹2 Lakhs
 * @returns {number | undefined} Allocation Percentage
 */
 export function assetAllocationPercentage(valueOfAsset =null , totalPortfolioValue=null){
  if(valueOfAsset ==null || totalPortfolioValue==null){
    return undefined;
  }
  
  return (valueOfAsset / totalPortfolioValue) * 100;

}

// console.log(assetAllocationPercentage(50000, 200000));
// console.log(savingsRate(50000, 100000));
// console.log(retirementSavingsTarget(2400000, 10));
// console.log(emergencyFundTarget(50000, 10));
// console.log(ruleOf72(10));
// console.log(savingForSpecificGoal(10000000, 200000, 120));
// console.log(debtPayOffPlan(10000,1000));
// console.log(roi(10000,100000));
// console.log(futureValueOfLumpSum(200000, 10, 10));
// console.log(compoundInterestWithRegularContributions(0,10, 5000, 20));
