export const dataRequest = (
    data,
    token,
    link,
    user,
    in_progress,
) => {
    const request = {
        header: {
            IN_PROCESS_ID: in_progress,
            OUT_PROCESS_ID: link,
            LOGIN_ID: user.emp_email_id,
        },
        token: token,
        data: {
            [`${link}`]: {
                Row: [data],
            },
        },
    };
    return request;
};