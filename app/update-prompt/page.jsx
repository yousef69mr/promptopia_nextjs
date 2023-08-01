'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';
const EditPrompt = () => {
  const router = useRouter();
  //   const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });
  const serchParams = useSearchParams();
  const promptId = serchParams.get('id');

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);

      const data = await response.json();

      setPost({ prompt: data?.prompt, tag: data?.tag });
    };

    if (promptId) {
      getPromptDetails();
    }
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();

    if (!promptId) {
      return alert('Prompt ID not found');
    }

    setSubmitting(true);
    try {
      const reponse = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (reponse.ok) {
        // console.log('success');
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="Edit"
      handleSubmit={updatePrompt}
      post={post}
      submitting={submitting}
      setPost={setPost}
    />
  );
};

export default EditPrompt;
