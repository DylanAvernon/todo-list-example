function Project({project, index, remove}) {
    function handleRemove() {
        remove(index)
    }
    return (
        <div className='project list-group-item d-flex justify-content-between align-items-start bg-dark text-white border-bottom border-success' id={index} key={index}>
            <div className='ms-2 w-50'>
                <div className='project-name fw-bold '>{project.name}</div>
                <div className='project-description ps-2'>{project.description}</div>
            </div>

            <div className='progress w-25'>
                <div className='progress-bar-striped bg-success' role='progressbar' aria-valuenow={project.progress} aria-valuemin='0' aria-valuemax='100' style={{width: project.progress + 'px'}}></div>
            </div>

            <div className='alerts w-25 text-center' data-bs-toggle='tooltip' title='Not Implemented'>
                <span className='badge bg-warning rounded-pill'>{project.alerts}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(238,210,2)" className="bi bi-exclamation-triangle ms-1" viewBox="0 0 16 16">
                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"></path>
                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"></path>
                </svg>
            </div>

            <div className='actions w-25 text-center'>
                <button type="button" className="btn btn-outline-danger p-1 ms-1" style={{fontSize: 'small'}} onClick={handleRemove}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                    Remove
                </button>
            </div>
        </div>
    );
}