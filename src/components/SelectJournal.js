import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';

function Select_Journal() {

    const { Step } = Steps;
    const steps = [
        {
            title: 'First',
            content: 'First-content',
        },
        {
            title: 'Second',
            content: 'Second-content',
        },s
        {
            title: 'Last',
            content: 'Last-content',
        },
    ];

    const App = () => {
        const [current, setCurrent] = useState(0);

        const next = () => {
            setCurrent(current + 1);
        };

        const prev = () => {
            setCurrent(current - 1);
        };

        return (
            <>
                <Steps current={current}>
                    {steps.map((item) => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => prev()}
                        >
                            Previous
                        </Button>
                    )}
                </div>
            </>
        );
    };
}

export default Select_Journal
