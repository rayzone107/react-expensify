import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ count, total }) => {
    const expenseWord = count === 1 ? "expense" : "expenses";
    const expenseTotal = numeral(total / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{count}</span> {expenseWord} totalling <span>{expenseTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        count: visibleExpenses.length,
        total: getExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);
