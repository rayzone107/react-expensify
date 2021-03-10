import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ count, total }) => {
    const expenseWord = count === 1 ? "expense" : "expenses";
    const expenseTotal = numeral(total / 100).format('$0,0.00');
    return (
        <div>
            {
                count > 0 && (
                    <p>Viewing {count} {expenseWord} totalling {expenseTotal}</p>
                )
            }
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
