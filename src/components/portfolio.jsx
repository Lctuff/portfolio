import React, { Component } from "react";
import { getProjects } from "../services/fakeProjectsService";

class Portfolio extends Component {
  state = { projects: getProjects() };
  render() {
    const { projects } = this.state;
    return (
      <div className="text-warning">
        {" "}
        <h1 className="d-flex justify-content-center py-5 fw-bold">
          My Portfolio
        </h1>
        <div className="row">
          <div className="col-4"></div>
          <div className="col">
            {projects.map((project) => (
              <div
                key={project._id}
                className="card text-bg-dark border-warning mb-3 w-50"
              >
                <div>
                  <div>
                    <img
                      src={project.img}
                      className="card-img-top rounded-start"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <a
                        className="btn btn-warning fw-bold"
                        href={project.link}
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
