/**
 * Type declarations for alex21c-personal-finance-calculator
 */

/**
 * Calculates the target amount for an emergency fund based on monthly expenses.
 * @param {number} monthlyExpenses Monthly expenses
 * @param {number} numberOfMonths Number of months for which to calculate emergency fund
 * @returns {number | undefined} Emergency Fund Target
 */
export function emergencyFundTarget(monthlyExpenses?: number, numberOfMonths?: number): number | undefined;

/**
 * Estimates the number of years it will take for an investment to double based on a fixed annual rate of return.
 * @param {number} annualReturnRate Annual return rate
 * @returns {number | undefined} Years to double
 */
export function ruleOf72(annualReturnRate?: number): number | undefined;

/**
 * Calculates the amount needed to be saved regularly to achieve a specific financial goal.
 * @param {number} goalAmount Investment goal in rupees
 * @param {number} currentSavings Current savings in rupees
 * @param {number} numberOfMonthsUntilGoal Number of months until goal
 * @returns {number | undefined} Savings Needed
 */
export function savingForSpecificGoal(goalAmount?: number, currentSavings?: number, numberOfMonthsUntilGoal?: number): number | undefined;

/**
 * Calculates the time to pay off a debt given regular payments.
 * @param {number} totalDebt Total debt
 * @param {number} monthlyPayment Monthly payment
 * @returns {number | undefined} Months to Pay Off Debt
 */
export function debtPayOffPlan(totalDebt?: number, monthlyPayment?: number): number | undefined;

/**
 * Measures the profitability of an investment relative to its cost.
 * @param {number} netProfit Net profit
 * @param {number} costOfInvestment Cost of investment
 * @returns {number | undefined} ROI in percent
 */
export function roi(netProfit?: number, costOfInvestment?: number): number | undefined;

/**
 * Calculates the future value of a lump sum investment after a certain number of years.
 * @param {number} presentValue Present value
 * @param {number} annualInterestRate Annual interest rate
 * @param {number} numberOfYears Number of years
 * @returns {number | undefined} Future value
 */
export function futureValueOfLumpSum(presentValue?: number, annualInterestRate?: number, numberOfYears?: number): number | undefined;

/**
 * Determines the future value of investments with regular contributions.
 * @param {number} principalInvestment Principal investment
 * @param {number} interestRatePerYear Interest rate per year
 * @param {number} regularContribution Regular contribution per month
 * @param {number} numberOfYears Number of years
 * @returns {number | undefined} Future value
 */
export function compoundInterestWithRegularContributions(principalInvestment?: number, interestRatePerYear?: number, regularContribution?: number, numberOfYears?: number): number | undefined;

/**
 * Determines the target amount to be saved for retirement.
 * @param {number} desiredAnnualRetirementIncome Desired annual retirement income
 * @param {number} expectedInvestmentReturnRate Expected investment return rate
 * @returns {number | undefined} Retirement Savings Target
 */
export function retirementSavingsTarget(desiredAnnualRetirementIncome?: number, expectedInvestmentReturnRate?: number): number | undefined;

/**
 * Calculates the percentage of income saved or invested regularly.
 * @param {number} amountSavedOrInvested Amount saved or invested
 * @param {number} totalIncome Total income
 * @returns {number | undefined} Savings Rate in percent
 */
export function savingsRate(amountSavedOrInvested?: number, totalIncome?: number): number | undefined;

/**
 * Helps in determining the proportion of assets to be allocated to different investment types.
 * @param {number} valueOfAsset Value of asset
 * @param {number} totalPortfolioValue Total portfolio value
 * @returns {number | undefined} Allocation Percentage
 */
export function assetAllocationPercentage(valueOfAsset?: number, totalPortfolioValue?: number): number | undefined;
