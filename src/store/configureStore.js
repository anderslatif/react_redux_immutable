import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export function configureStore(initialState, helpers) {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware.withExtraArgument(helpers)))
    );

    // https://github.com/reactjs/react-redux/releases/tag/v2.0.0
    if (module.hot) {
        module.hot.accept('../reducers/rootReducer', async () => {
            const nextRootReducer = (await import('../reducers/rootReducer')).default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
