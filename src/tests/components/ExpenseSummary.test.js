import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from "../../components/ExpenseSummary";
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary count={1} total={250} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary count={3} total={49520} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with no expenses', () => {
    const wrapper = shallow(<ExpenseSummary count={0} total={0} />);
    expect(wrapper).toMatchSnapshot();
});
