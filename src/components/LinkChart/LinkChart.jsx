import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const LinkChart = () => {

    const mathMarks = [
        { "id": 1, "name": "Alice", "math": 85, "biology": 78, "physics": 92, "chemistry": 88 },
        { "id": 2, "name": "Bob", "math": 78, "biology": 72, "physics": 80, "chemistry": 85 },
        { "id": 3, "name": "Charlie", "math": 92, "biology": 90, "physics": 94, "chemistry": 96 },
        { "id": 4, "name": "David", "math": 64, "biology": 58, "physics": 68, "chemistry": 62 },
        { "id": 5, "name": "Eve", "math": 75, "biology": 68, "physics": 78, "chemistry": 72 },
        { "id": 6, "name": "Frank", "math": 89, "biology": 82, "physics": 90, "chemistry": 88 },
        { "id": 7, "name": "Grace", "math": 95, "biology": 92, "physics": 98, "chemistry": 96 },
        { "id": 8, "name": "Helen", "math": 70, "biology": 65, "physics": 75, "chemistry": 68 },
        { "id": 9, "name": "Ivy", "math": 82, "biology": 75, "physics": 84, "chemistry": 80 },
        { "id": 10, "name": "Jack", "math": 77, "biology": 70, "physics": 79, "chemistry": 75 }
    ]


    return (
        <div>
            <LChart width={800} height={400} data={mathMarks} >
                <Line dataKey="math" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
                <CartesianGrid/>
                <Line dataKey="biology" stroke='pink'></Line>
                <Line dataKey="physics" stroke='blue'></Line>
                <XAxis dataKey='name'/> <YAxis/>
            </LChart>
        </div>
    );
};

export default LinkChart;