import { FC, Component } from "react";
import { verify } from "jsonwebtoken";

const WithAuth = <T extends object>(WrappedComponent: FC) => {

    return class AuthComponents extends Component<T> {
        state = {
            verified: false,
            user: null
        }

        componentDidMount() {
            const token = localStorage.getItem('accessToken') || "";

            if (!token) {
                window.location.replace(`${window.location.origin}/login`);
            } else {
                try {
                    const user = verify(token, process.env.NEXT_PUBLIC_JWT_SECRECT as string);

                    this.setState({ verified: true, user });
                } catch {
                    localStorage.removeItem('accessToken');
                    window.location.replace(`${window.location.origin}/login`);
                }
            }
        }

        render() {
            if (this.state.verified) return <WrappedComponent {...this.props} user={this.state.user} />;
            else return null;
        }
    }
}

export default WithAuth;