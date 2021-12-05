function App() {
    const [projects, setProjects] = React.useState(initialProjects);
    const addProject = (name, setName, description, setDescription) => {
        if(!name) return;
        const newProjects = [...projects, {name, description, progress: Math.floor(Math.random() * 101), alerts: Math.floor(Math.random() * 41), isCompleted: false}];
        setProjects(newProjects);
        setName('');
        setDescription('');
    }
    const removeProject = index => {
        let temp = [...projects];
        temp.splice(index, 1);
        setProjects(temp);
    }
    
    return (
        <div className='app'>
            <div className='container'>
                <div className='list-group mt-3'>
                    {projects.map((project, i) => 
                        <Project index={i} key={i} project={project} remove={removeProject} />
                    )}
                </div>
                <ProjectForm addProject={addProject} />
            </div>
        </div>);
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);