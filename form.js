function ProjectForm({addProject}) {
    const [projectName, setProjectName] = React.useState('');
    const [projectDescription, setProjectDescription] = React.useState('');
    const handleSubmit = e => {
        e.preventDefault();
        addProject(projectName, setProjectName, projectDescription, setProjectDescription);
    }
    return (
        <div className='container-sm m-3'>
            <h3>New Project</h3>
            <form className='mt-3' onSubmit={handleSubmit}>
                <div className='row g-3 align-items-center mb-1'>
                    <div className='col-auto'>
                        <label htmlFor='project-name' className='col-form-label'>Project Name</label>
                        <input type='text' className='form-control shadow ms-3' id='project-name' value={projectName} onChange={e => setProjectName(e.target.value)} />
                    </div>
                </div>
                <div className='row g-3 align-items-center'>
                    <div className='col-auto'>
                        <label htmlFor='project-description' className='col-form-label'>Project Description</label>
                        <input type='text' className='form-control shadow ms-3' id='project-description' value={projectDescription} aria-describedby='project-description-help-block' onChange={e => setProjectDescription(e.target.value)} />
                        <span id='project-description-help-block' className='form-text ms-3'>Provide a short description.</span>
                    </div>
                </div>
                <input type='submit' className='btn btn-primary mt-3' value='New Project' />
            </form>
        </div>
    );
}