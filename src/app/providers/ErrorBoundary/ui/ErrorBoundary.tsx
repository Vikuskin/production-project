import { Component, ErrorInfo, ReactNode, Suspense } from 'react';

import { ErrorPage } from 'pages/ErrorPage';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { PageLoader } from 'widgets/PageLoader';

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
        <Suspense fallback={<PageLoader />}>
          <ErrorPage errorCode={ErrorStatusCode.InternalServerError} text="Unexpected error" />
        </Suspense>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
