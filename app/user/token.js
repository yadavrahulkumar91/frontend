import axios from 'axios';

const CUSTOMER_API_TOKEN = '547391deeff546c4902a44850f6ec8fa091217df423b51ca9670813d6cfc369ea1332730c90545fbd313b703eca49dd492469eee40374df0815a0a7c97553780e93e1366733dc92e60a92bb4503d51b16fc137dc45c54ae893e99603a2996c5c01ee519bf52f6b0ff1f95d8c99b6657485b0c850a64198d2a72a12eb73e6f920';
const SELLER_API_TOKEN = '176b0c3693240d68fc91d42169c8ed1bb19ad4df6a46c2ca28f5c170c4c0f1d525b2f5964ebfcfed1065b50fa3c076ca567f82a3a86c06db431b863aae828228d914565128d2258325257a14802171b4b69e4c8e2c5e60d4dd01594ed176b86e588240b0d2d842dcc1715afcad91475ac5d10cd54cb2bc6dcd4236bad511a27b';

// For customer requests
const customerRequestConfig = {
    headers: {
        Authorization: `Bearer ${CUSTOMER_API_TOKEN}`,
    },
};

// For seller requests
const sellerRequestConfig = {
    headers: {
        Authorization: `Bearer ${SELLER_API_TOKEN}`,
    },
};

// Use these request configurations when making requests based on user roles.
