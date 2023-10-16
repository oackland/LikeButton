import React from 'react';

export const nameDirectory = [
    {name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890"},
    {name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210"},
    {name: "Robert Johnson", email: "robert.johnson@example.com", phone: "456-789-0123"},
    {name: "Mary James", email: "mary.james@example.com", phone: "789-012-3456"},
    {name: "William Brown", email: "william.brown@example.com", phone: "234-567-8901"},
    {name: "Jessica Taylor", email: "jessica.taylor@example.com", phone: "567-890-1234"},
    {name: "Michael Davis", email: "michael.davis@example.com", phone: "890-123-4567"},
    {name: "Linda Miller", email: "linda.miller@example.com", phone: "012-345-6789"},
    {name: "David Wilson", email: "david.wilson@example.com", phone: "345-678-9012"},
    {name: "Sarah Moore", email: "sarah.moore@example.com", phone: "678-901-2345"},
    {name: "Chris Taylor", email: "chris.taylor@example.com", phone: "901-234-5678"},
    {name: "Grace Johnson", email: "grace.johnson@example.com", phone: "234-567-8901"},
    {name: "Paul Anderson", email: "paul.anderson@example.com", phone: "567-890-1234"},
    {name: "Nancy Rodriguez", email: "nancy.rodriguez@example.com", phone: "890-123-4567"},
    {name: "Mark Martinez", email: "mark.martinez@example.com", phone: "012-345-6789"},
    {name: "Betty Hernandez", email: "betty.hernandez@example.com", phone: "345-678-9012"},
    {name: "Frank Garcia", email: "frank.garcia@example.com", phone: "678-901-2345"},
    {name: "Angela Lee", email: "angela.lee@example.com", phone: "901-234-5678"},
    {name: "Victor Young", email: "victor.young@example.com", phone: "234-567-8901"},
    {name: "Laura Walker", email: "laura.walker@example.com", phone: "567-890-1234"}
];

const NameDirectoryPage: React.FC = () => {
    return (
        <div>
            <h1>Name Directory</h1>
            {nameDirectory.map((data, index) => (
                <div key={index}>
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                    <hr/>
                </div>
            ))}
        </div>
    );
};

export default NameDirectoryPage;
