{fetchedUser && (
    <Group title="Пользователь">
      <Cell
        before={
          fetchedUser.photo_200 ? (
            <Avatar src={fetchedUser.photo_200} />
          ) : null
        }
        description={
          fetchedUser.city && fetchedUser.city.title
            ? fetchedUser.city.title
            : ""
        }
      >
        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
      </Cell>
    </Group>
  )}