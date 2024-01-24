import { Component, ErrorInfo, ReactNode, Suspense } from 'react';

import { ErrorPage } from 'pages/ErrorPage';
import { ErrorStatusCodes } from 'shared/enums/errorStatusCode';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoudaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoudaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback="">
          <ErrorPage errorCode={ErrorStatusCodes.InternalServerError} text="Unexpected error" />
        </Suspense>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
