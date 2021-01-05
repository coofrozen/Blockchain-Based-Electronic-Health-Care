import React, { Component } from "react";
import Identicon from "identicon.js";

class Symptoms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symptom: "",
      address: "",
      timeStamp: "",
    };
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const symptom = this.state.symptom;
    const address = this.state.address;
    const timeStamp = this.state.timeStamp;

    this.props.newSymptom(symptom, address, timeStamp);
    console.log("you have inserted data" + symptom, address, timeStamp);
  };

  render() {
    return (
      <div className="container-fluid mt-5 col-lg-6">
        <form onSubmit={this.handleSubmit} className="inputForm">
          <div className="form-group">
            <label for="symptomsinsert">Symptoms</label>
            <input
              name="symptom"
              value={this.state.symptom}
              type="text"
              onChange={(e) => this.handleChange(e)}
              className="form-control"
              placeholder="Symptoms"
            />
          </div>
          <div className="form-group">
            <label for="address options">Address</label>
            <select
              required
              name="address"
              className="form-control"
              value={this.state.address}
              onChange={(e) => this.handleChange(e)}
            >
              <option value="0xc9C204093914099A788fC3C8f84bF2FbDC860C98">
                0xc9C204093914099A788fC3C8f84bF2FbDC860C98
              </option>
              ;<option>0x49387FBe1aa8014E74d8842e5cE8F4520d8c14AE</option>;
              <option>0xa1902b173AaC8a030dB611dC64E8d3492155573C</option>;
              <option>0x0D1ec6A2816e2704aDBefED4623E0D8F9B54Aba7</option>;
              <option>0xF33d37420681DD5F4A22fe7bf48C321F449D401F</option>;
              <option>0x32429F4593290c87398862eFE4CF625137bD4718</option>;
              <option>0xAc2705FdB899D8e0A0098C1527FB6a45D016BD1C</option>;
              <option>0x78FCe8768b6e9b36D12a6EE3255e634c0cfa22Be</option>;
              <option>0x6d30650c280A04317eaFEdEdeF93e6537C350214</option>;
              <option>0x0a4a0Dfb0FA3B1D730aB7Ee3A8DecE5b9844714B</option>;
            </select>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Time stamp</label>
            <input
              name="timeStamp"
              type="date"
              value={this.state.timeStamp}
              onChange={(e) => this.handleChange(e)}
              className="form-control"
              placeholder="Date Time"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <p>&nbsp;</p>
        {this.props.symptoms.map((symp, key) => {
          return (
            <div className="card mb-4" key={key}>
              <div className="card-header">
                <img
                  alt="img"
                  className="mr-2"
                  width="30"
                  height="30"
                  src={`data:image/png;base64,${new Identicon(
                    symp.patient,
                    30
                  ).toString()}`}
                />
                <small className="text-muted">{symp.patient}</small>
              </div>
              <ul id="postList" className="list-group list-group-flush">
                <li className="list-group-item">
                  <p>{symp.symp}</p>
                </li>
                <li key={key} className="list-group-item py-2">
                  <small className="float-right mt-1 text-muted">
                    Diagnosis Time: {symp.time}
                  </small>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Symptoms;
