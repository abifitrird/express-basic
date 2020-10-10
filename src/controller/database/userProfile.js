const { user, profile, Job } = require("../../../models");

exports.readUser = async (req, res) => {
  try {
    const usersData = await user.findAll({
      include: {
        as: "profile",
        model: profile,
      },
    });
    res.send({
      message: "User has been successfully loaded",
      data: {
        users: usersData,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};

// function untuk membaca prodile beserta relasinya ke user
exports.readProfile = async (req, res) => {
  try {
    const profilesData = await profile.findAll({
      include: user,
    });
    res.send({
      message: "Profiles has been successfully loaded",
      data: {
        users: profilesData,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};

// controller untuk membaca data jobs
exports.getUserJobs = async (req, res) => {
  try {
    const userJobsData = await user.findAll({
      include: {
        model: Job,
        as: "jobs",
        attributes: {
          exclude: ["userId", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["profileId", "createdAt", "updatedAt"],
      },
    });
    res.send({
      message: "Your request has been successfully loaded",
      data: {
        user: userJobsData,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "SERVER ERROR",
      },
    });
  }
};
