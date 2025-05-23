export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const

export const FILTERS_BUTONS = {
    [TODO_FILTERS.ALL]: {
        literal:"Todos",
        href:`/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]:{
        literal:"Activo",
        href:`/?=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]:{
        literal:"completado",
        href:`/?=${TODO_FILTERS.COMPLETED}`
    }
} as const