import Commerce from "@chec/commerce.js";

const REACT_APP_CHECK_PUBLIC_KEY = 'pk_test_28743d0d865358a00c4264a6163e3ba6cdf30f8252e20'
const REACT_APP_STRIPE_PUBLIC_KEY = 'pk_test_51J1mJAEi2QqD8lew860NF9Q8dtHg7YOHQZOXoe6NX0EuDGP9LVsGjDyype9Bhqop3jh4zHAIShDQ4uzYWsfn7OlJ00VlEBN3gi'
        
export const commerce = new Commerce(REACT_APP_CHECK_PUBLIC_KEY, true)
