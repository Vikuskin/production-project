export const addQueryParams = (params: Record<string, string | null>) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    value && searchParams.set(name, value);
  });

  window.history.pushState(null, '', `?${searchParams.toString()}`);
};
