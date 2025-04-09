<script setup lang="ts">
  import * as z from 'zod'
  import type { FormSubmitEvent } from '@nuxt/ui'

  const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
  })

  type Schema = z.output<typeof schema>

  const state = reactive<Partial<Schema>>({
    email: undefined,
    password: undefined,
  })

  const toast = useToast()
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
    console.log(event.data)
  }
</script>

<template>
  <div class="flex h-screen">
    <UCard class="m-auto shadow w-sm">
      <div class="flex flex-col gap-2 mb-4">
        <h1 class="text-2xl font-bold">Login</h1>
        <p class="text-sm text-gray-500">Enter your email and password to login</p>
      </div>
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit">
        <UFormField
          label="Email"
          name="email">
          <UInput
            v-model="state.email"
            placeholder="you@example.com"
            class="w-full shadow-xs" />
        </UFormField>

        <UFormField
          label="Password"
          name="password">
          <UInput
            v-model="state.password"
            placeholder="Enter your password"
            class="w-full shadow-xs"
            type="password" />
        </UFormField>

        <UButton
          type="submit"
          class="justify-center w-full shadow-xs"
          color="neutral">
          Submit
        </UButton>

        <UButton
          type="submit"
          class="justify-center w-full shadow-xs"
          color="neutral"
          variant="outline">
          Login with GitHub
        </UButton>

        <div class="flex justify-center text-sm">
          <p>Don't have an account?</p>
          <p></p>
          <NuxtLink
            to="/auth/register"
            class="ml-1 underline">
            Sign up
          </NuxtLink>
        </div>
      </UForm>
    </UCard>
  </div>
</template>
