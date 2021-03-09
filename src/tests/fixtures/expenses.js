import moment from 'moment';

export default [{
    id: '1',
    description: 'One',
    amount: 200,
    createdAt: 0
}, {
    id: '2',
    description: 'Two',
    amount: 4000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Three',
    amount: 1000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];
