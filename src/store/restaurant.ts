import { createStore, Mutator, GetState } from 'vue-dfs-store'
import * as api from '../data'

type RestaurantState = {
    restaurants: api.Restaurant[];
    error: Error | undefined;
    loading: boolean;
    updating: boolean;
    deleting: boolean;
}

type RestaurantAccessors = {
    // create: (restaurant: api.Restaurant) => Promise<void>;
    // delete: (id: number) => Promise<void>;
    get: () => Promise<void>;
    // sorted: ()=> api.Restaurant[];
    // update: (restaurant: api.Restaurant) => Promise<void>;
}

const accessorsCreator = (
    mutate: Mutator<RestaurantState>,
    get: GetState<RestaurantState>
): RestaurantAccessors => ({
    get: async() => {
        mutate((state) =>{
            state.loading = true;
            state.error= undefined
        })
    }
})

const restaurantStore = createStore<RestaurantState, RestaurantAccessors>({
    name: 'RestaurantStore',
    initialState: {
        restaurants: [],
        error: undefined,
        loading: false,
        updating: false,
        deleting: false
    },
    accessorsCreator: accessorsCreator
})
