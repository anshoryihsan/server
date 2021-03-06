const res = {
  success: (value, res, msg) => {
    const data = {
      success: true,
      status: 200,
      message: msg,
      data: value,
    };
    res.json(data);
  },

  failed: (value, res, msg) => {
    const data = {
      success: false,
      status: 400,
      message: msg,
      data: value,
    };
    res.json(data);
  },

  forbiden: (res, msg) => {
    const data = {
      success: false,
      status: 403,
      message: msg,
    };
    res.json(data);
  },
  unauth: (res, msg) => {
    const data = {
      success: false,
      status: 401,
      message: msg,
    };
    res.json(data);
  },
};

module.exports = res;
