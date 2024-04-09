import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Auth from '@/components/auth/Auth'

import CompanyList from '@/components/company/index.vue'
import CompanyForm from '@/components/company/form.vue'

import UserList from '@/components/user/index.vue'
import UserForm from '@/components/user/form.vue'

import CustomerList from '@/components/customer/index.vue'
import CustomerForm from '@/components/customer/form.vue'

import ConcessionaireList from '@/components/concessionaire/index.vue'
import ConcessionaireForm from '@/components/concessionaire/form.vue'

import ProposalList from '@/components/proposal/index.vue'
import ProposalForm from '@/components/proposal/form.vue'

Vue.use(VueRouter)

const routes = [
    
{
    name: 'auth',
    path: '/auth',
    component: Auth
},
{
    name: 'home',
    path: '/',
    component: Home
}, 
{
    name: 'company',
    path: '/company',
    component: CompanyList,
},
{
    name: 'companyNew',
    path: '/company/new',
    component: CompanyForm,
},
{
    name: 'companyEdit',
    path: '/company/edit/:id',
    component: CompanyForm,
},
{
    name: 'user',
    path: '/user',
    component: UserList,
},
{
    name: 'userNew',
    path: '/user/new',
    component: UserForm,
},
{
    name: 'userEdit',
    path: '/user/edit/:id',
    component: UserForm,
},
{
    name: 'customer',
    path: '/customer',
    component: CustomerList,
},
{
    name: 'customerNew',
    path: '/customer/new',
    component: CustomerForm,
},
{
    name: 'customerEdit',
    path: '/customer/edit/:id',
    component: CustomerForm,
},
{
    name: 'concessionaire',
    path: '/concessionaire',
    component: ConcessionaireList,
},
{
    name: 'concessionaireNew',
    path: '/concessionaire/new',
    component: ConcessionaireForm,
},
{
    name: 'concessionaireEdit',
    path: '/concessionaire/edit/:id',
    component: ConcessionaireForm,
},
{
    name: 'proposal',
    path: '/proposal',
    component: ProposalList,
},
{
    name: 'proposalCreate',
    path: '/proposal/new/',
    component: ProposalForm,
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
