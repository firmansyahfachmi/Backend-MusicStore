module.exports = {
    result: (res, status, response) => {
        if (response < 1) {
            status = 404;
            response = "Not Found";
        }

        const formResponse = {
            status: status,
            data: response
        };
        res.status(status);
        res.json(formResponse);
    }
};