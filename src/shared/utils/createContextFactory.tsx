import { createContext, useContext } from 'react';

export const createContextFactory = <T extends object>() => {
	const Context = createContext<T | undefined>(undefined);

	interface ProviderProps {
		children: React.ReactNode;
		value: T;
	}
	const Provider: React.FC<ProviderProps> = ({ children, value }) => {
		return <Context.Provider value={value}>{children}</Context.Provider>;
	};

	const useContextFactory = () => {
		const context = useContext(Context);

		if (!context) {
			throw new Error('This component can only be called inside the parent component.');
		}

		return context;
	};

	return [useContextFactory, Provider] as const;
};
