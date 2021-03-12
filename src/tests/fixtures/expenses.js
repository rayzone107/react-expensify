import moment from 'moment';

export default [{
    id: '1',
    description: 'One',
    amount: 200,
    note: '',
    createdAt: 0
}, {
    id: '2',
    description: 'Two',
    amount: 4000,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Three',
    amount: 1000,
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf()
}];
