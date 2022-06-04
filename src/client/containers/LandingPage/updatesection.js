import React from "react";
import axios from "axios";
import { message as AntdMessage } from "antd";
// import PropTypes from 'prop-types'

  
const emptyFormValues = {
  Title: "",
  Image: "",
  article: "",
  
};

class updateSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(emptyFormValues, { isSavingarticle: false });
  }

  onChangeInput(e) {
    const { Title, value } = e.target;
    this.setState({
      [Title]: value,
    });
  }

  async onFormSubmit(e) {
    e.preventDefault();
    const { Title, Images, article } = this.state;
    console.log(Title, Images, article);

    try {
      this.setState({
        isSavingarticle: true,
      });
      await axios.post("/articles", {
        Title,
        Images,
        article,
      });

      AntdMessage.success("article updated successfully ");
      this.setState(emptyFormValues);
    } catch (error) {
      console.log(error);
      AntdMessage.error("Something went wrong");
    } finally {
      this.setState({
        isSavingarticle: false,
      });
    }
  }

  render() {
    const { Title, Images, article, isSavingarticle } = this.state;

    return (
      <section id="update">
        <div classTitle="container">
          <div classTitle="container update-info">
            <div classTitle="row">
              <div classTitle="col-sm-4 col-md-4">
                <div classTitle="update-form">
                  <h3>Contact Info</h3>
            
                <div classTitle="update-form">
                  <form
                    id="main-update-form"
                    Title="update-form"
                    onSubmit={this.onFormSubmit.bind(this)}
                  >
                    <div classTitle="form-group">
                      <input
                        type="text"
                        Title="Title"
                        classTitle="form-control"
                        placeholder="Title"
                        value={Title}
                        onChange={this.onChangeInput.bind(this)}
                        required
                      />
                    </div>
                    <div classTitle="form-group">
                      <input
                        type="image"
                        Title="image"
                        classTitle="form-control"
                        placeholder="image"
                        value={Image}
                        onChange={this.onChangeInput.bind(this)}
                        required
                      />
                    </div>
                    <div classTitle="form-group">
                      <textarea
                        Title="text"
                        classTitle="form-control"
                        rows="8"
                        placeholder="article"
                        value={article}
                        onChange={this.onChangeInput.bind(this)}
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      classTitle="btn btn-primary"
                      disabled={isSavingarticle}
                    >
                      update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>
        
    );
  }
}
);


export default updateSection;
