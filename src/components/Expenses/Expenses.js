import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpensesFilter.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        
    };

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler} />
                <ExpenseItem
                    title={props.items[0].title} //the number in the array shows where the corresponding expense data lies in the list. this is the first item and becausethis is JS, we start at 0.
                    amount={props.items[0].amount} //dont forget to the word props when passing data
                    date={props.items[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                    ></ExpenseItem>
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                ></ExpenseItem>
            </Card>
        </div>
    );
}

export default Expenses;