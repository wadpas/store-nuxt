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

  const authenticate = async () => {
    window.location.href = '/api/auth/github'
  }

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
        <h1 class="text-2xl font-bold">Вхід</h1>
        <p class="text-sm text-gray-500">Надайте пошту та пароль, щоб увійти до акаунту</p>
      </div>
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit">
        <UFormField
          label="Пошта"
          name="email">
          <UInput
            v-model="state.email"
            placeholder="you@example.com"
            class="w-full shadow-xs" />
        </UFormField>

        <UFormField
          label="Пароль"
          name="password">
          <UInput
            v-model="state.password"
            placeholder="Введіть пароль"
            class="w-full shadow-xs"
            type="password" />
        </UFormField>

        <UButton
          type="submit"
          class="justify-center w-full shadow-xs"
          color="neutral">
          Увійти
        </UButton>

        <UButton
          type="button"
          class="justify-center w-full shadow-xs"
          color="neutral"
          @click="authenticate"
          variant="outline">
          <Icon
            name="uil:github"
            size="20"
            style="color: black" />
          GitHub
        </UButton>

        <div class="flex justify-center text-sm">
          <p>Немає акаунту?</p>
          <p></p>
          <NuxtLink
            to="/auth/register"
            class="ml-1 underline">
            Реєстрація
          </NuxtLink>
        </div>
      </UForm>
    </UCard>
  </div>
</template>
