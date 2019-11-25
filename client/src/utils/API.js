import axios from "axios";

// TODO Replace name with different word

export default {
  // Gets all names
  getNames: function() {
    return axios.get("/api/names");
  },
  // Gets the name with the given id
  getName: function(id) {
    return axios.get("/api/names/" + id);
  },
  // Deletes the name with the given id
  deleteName: function(id) {
    return axios.delete("/api/names/" + id);
  },
  // Saves a name to the database
  saveName: function(nameData) {
    return axios.post("/api/names", nameData);
  }
};
