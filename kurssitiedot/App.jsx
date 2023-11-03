const App = () => {
    //const-määrittelyt
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };

    const Part = ({ i }) => {
        return (
            <div>
                <p>
                    {course.parts[i].name} {course.parts[i].exercises}
                </p>
            </div>
        );
    };
    const Header = () => {
        return <h1>{course.name}</h1>;
    };
    const Total = () => {
        return (
            <p>
                Total:{" "}
                {course.parts[0].exercises +
                    course.parts[1].exercises +
                    course.parts[2].exercises}
            </p>
        );
    };
    const Content = () => {
        return (
            <div>
                <Part i={0} />
                <Part i={1} />
                <Part i={2} />
            </div>
        );
    };
    return (
        <div>
            <Header />
            <Content />
            <Total />
        </div>
    );
};
export default App;
