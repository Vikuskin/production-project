import { Component, ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from 'pages/ErrorPage';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoudaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoudaryState> {
  constructor(props: ErrorBoundaryProps) {
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
          <ErrorPage text="Unexpected error" />
        </Suspense>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
